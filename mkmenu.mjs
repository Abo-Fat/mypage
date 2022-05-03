import { readFileSync } from 'fs'

export const menuTemplate = readFileSync('./menu-template.html').toString()
