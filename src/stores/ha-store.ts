import { create } from "zustand"
import type { HassEntity, HassConfig, AreaRegistryEntry, DeviceRegistryEntry } from "@/lib/ha/types"

interface StoreState {
  connection: { status: "disconnected" | "connecting" | "connected" | "error"; haUrl: string | null }
  entities: Record<string, HassEntity>
  config: HassConfig | null
  areas: AreaRegistryEntry[]
  devices: DeviceRegistryEntry[]
  calls: {
    setConnection: (status: StoreState["connection"]["status"]) => void
    setHaUrl: (url: string) => void
    updateEntities: (entities: Record<string, HassEntity>) => void
    setConfig: (config: HassConfig | null) => void
    setAreas: (areas: AreaRegistryEntry[]) => void
    setDevices: (devices: DeviceRegistryEntry[]) => void
  }
}

export const useStore = create<StoreState>((set) => ({
  connection: { status: "disconnected", haUrl: null },
  entities: {},
  config: null,
  areas: [],
  devices: [],
  calls: {
    setConnection: (status) => set((s) => ({ connection: { ...s.connection, status } })),
    setHaUrl: (haUrl) => set((s) => ({ connection: { ...s.connection, haUrl } })),
    updateEntities: (entities) => set({ entities }),
    setConfig: (config) => set({ config }),
    setAreas: (areas) => set({ areas }),
    setDevices: (devices) => set({ devices }),
  },
}))

export function useConnection() {
  return useStore((s) => s.connection)
}

export function useEntities() {
  return useStore((s) => s.entities)
}
