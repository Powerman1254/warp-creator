import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'warp_manager',
  description: ["",{"text":"Warp creator","bold":true,"color":"dark_red"},{"text":"\n"},{"text":"a area creator plugin","color":"gold"}],
  formatVersion: 8,
  namespace: 'warp_creator',
  packUid: '8yzJoUog',
  saveOptions: { path: '..\\' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
