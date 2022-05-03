import { readFileSync } from 'fs'

const template = readFileSync('./blogs-embed.template.html').toString()

export function makeBlogEmbed({ title, label, time, text, slug }) {
    let result = template
    result = result.replace('{{ title }}', title)
    result = result.replace('{{ label }}', label)
    result = result.replace('{{ time }}', time)
    result = result.replace('{{ text }}', text)
    result = result.replace('{{ slug }}', slug)
    return result
}