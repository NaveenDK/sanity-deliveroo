export default {
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Price of the dish in GBP',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
