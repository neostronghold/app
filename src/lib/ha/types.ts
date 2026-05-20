export interface HassEntity {
  entity_id: string
  state: string
  attributes: Record<string, unknown>
  last_changed: string
  last_updated: string
  context: { id: string; user_id: string | null; parent_id: string | null }
}

export interface HassService {
  name?: string
  description?: string
  target?: Record<string, unknown> | null
  fields: Record<string, unknown>
}

export interface HassConfig {
  version: string
  state: string
  location_name: string
  time_zone: string
  currency: string
  country: string | null
  language: string
  unit_system: Record<string, string>
}

export interface AreaRegistryEntry {
  area_id: string
  name: string
  floor_id: string | null
  icon: string | null
}

export interface DeviceRegistryEntry {
  id: string
  name: string | null
  manufacturer: string | null
  model: string | null
  area_id: string | null
}

export interface LovelaceViewConfig {
  type?: string
  title?: string
  path?: string
  icon?: string
  cards?: { type: string; [key: string]: unknown }[]
}
