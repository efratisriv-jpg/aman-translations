
import { GoogleGenAI, GenerateContentResponse, Type, Modality } from "@google/genai";

// Standard client initialization
// Always use the API key directly from process.env.API_KEY as per guidelines
const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const geminiService = {
  // Advanced reasoning chat with Thinking Budget
  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    const ai = getAIClient();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          thinkingConfig: { thinkingBudget: 4000 },
          temperature: 0.7,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Chat error:", error);
      throw error;
    }
  },

  // High-fidelity image generation
  async generateImage(prompt: string) {
    const ai = getAIClient();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      throw new Error("No image data returned from model");
    } catch (error) {
      console.error("Image generation error:", error);
      throw error;
    }
  },

  // Live session helper (returns a promise)
  connectLive(callbacks: any) {
    const ai = getAIClient();
    return ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-12-2025',
      callbacks,
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } }
        },
        systemInstruction: 'You are Lumina, a helpful and highly intelligent real-time AI assistant.'
      }
    });
  }
};

// Audio encoding/decoding utils
export const audioUtils = {
  encode(bytes: Uint8Array) {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  },
  
  decode(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  },

  async decodeAudioData(
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
  ): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }
};
