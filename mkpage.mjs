import { readFileSync, writeFileSync } from 'fs'
import { makeBlogEmbed } from './mkblogembed.mjs'
import { menuTemplate } from './mkmenu.mjs'
import { blogs } from './blogs.mjs'

function makeBlogsPage() {
    const template = readFileSync('./blogs.template.html').toString()
    let result = template
    result = result.replace('{{ menu }}', menuTemplate)
    result = result.replace('{{ blogs }}', blogs.map(blog => makeBlogEmbed(blog)).join('\n'))
    writeFileSync('./out-blogs.html', result)
}

function makeBlogPage(blog) {
    const template = readFileSync('./blog.template.html').toString()
    let result = template
    result = result.replace('{{ menu }}', menuTemplate)
    result = result.replaceAll('{{ title }}', blog.title)
    result = result.replace('{{ label }}', blog.label)
    result = result.replace('{{ time }}', blog.time)
    result = result.replace('{{ text }}', blog.text)
    writeFileSync(`./out-blog-${blog.slug}.html`, result)
}

makeBlogsPage()
blogs.forEach(blog => makeBlogPage(blog))
