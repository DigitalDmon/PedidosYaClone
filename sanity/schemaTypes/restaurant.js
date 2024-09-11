import {defineType} from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant Name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short Description',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'image_presentation',
            type: 'image',
            title: 'Image presentation of the Restaurant'
        },
        {
            name: 'image_logo',
            type: 'image',
            title: 'Image Logo of the Restaurant'
        },
        {
            name: 'latitude',
            type: 'number',
            title: 'Latitude of the Restaurant',
        },
        {
            name: 'longitude',
            type: 'number',
            title: 'Longitude of the Restaurant'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Restaurant Address',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Enter a Rating from (1-5 Stars)',
            validation: (Rule) =>
                Rule.required()
                    .min(1)
                    .max(5)
                    .error('Please enter a Rating between 1 and 5')
        },
        {
            name: 'type',
            type: 'reference',
            title: 'Category',
            validation: (Rule) => Rule.required(),
            to: [{type: 'category'}],
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [{type: 'reference', to: [{type: 'dish'}]}],
        },
    ],

})
