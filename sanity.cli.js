import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'lpfo9e0x',
    dataset: 'production',
  },
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
