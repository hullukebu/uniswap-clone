import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '0dda2bf6',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skJCGon6cKiQpHVRsEy1BZroGKtBGQ1QByseB54k8CLhcXRcTpzVi7ZiY90Met2beVv6zr3Z9lOTqu19XmYwL0EJF6iN9ykMQEwQNuF4ZdkZjkjTv2lqWptkVhdPAOCZrvqEf9DVgGrIkmeDhyx2yJNOtc86U5Ka8O1nkN3o8UGY2dzwelEX',
  useCdn: false,
})
