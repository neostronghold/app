import { create } from "zustand"

export interface AgentMessage {
  id: string
  sessionId: string
  role: "user" | "assistant" | "tool" | "system"
  parts: { type: string; text?: string; name?: string; [key: string]: unknown }[]
  createdAt: number
}

export interface AgentSession {
  id: string
  title: string
  messageCount: number
  createdAt: number
  updatedAt: number
}

interface AgentStore {
  sessions: AgentSession[]
  currentSessionId: string | null
  messagesBySession: Record<string, AgentMessage[]>
  isStreaming: boolean
  createSession: () => void
  setCurrentSession: (id: string | null) => void
  addMessage: (msg: AgentMessage) => void
  updateMessage: (sessionId: string, messageId: string, parts: AgentMessage["parts"]) => void
  setStreaming: (v: boolean) => void
}

export const useAgentStore = create<AgentStore>((set, get) => ({
  sessions: [],
  currentSessionId: null,
  messagesBySession: {},
  isStreaming: false,

  createSession: () => {
    const id = crypto.randomUUID()
    const session: AgentSession = {
      id,
      title: "New Session",
      messageCount: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    set((s) => ({ sessions: [...s.sessions, session], currentSessionId: id }))
  },

  setCurrentSession: (currentSessionId) => set({ currentSessionId }),

  addMessage: (msg) =>
    set((s) => {
      const existing = s.messagesBySession[msg.sessionId] || []
      return {
        messagesBySession: { ...s.messagesBySession, [msg.sessionId]: [...existing, msg] },
        sessions: s.sessions.map((ses) =>
          ses.id === msg.sessionId ? { ...ses, messageCount: ses.messageCount + 1, updatedAt: Date.now() } : ses
        ),
      }
    }),

  updateMessage: (sessionId, messageId, parts) =>
    set((s) => ({
      messagesBySession: {
        ...s.messagesBySession,
        [sessionId]: (s.messagesBySession[sessionId] || []).map((m) =>
          m.id === messageId ? { ...m, parts } : m
        ),
      },
    })),

  setStreaming: (isStreaming) => set({ isStreaming }),
}))
