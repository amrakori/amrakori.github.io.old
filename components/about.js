/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, PlusIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Create NFTs at affordable rates.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Easy NFT Creation',
    description:
      'Drag and drop interface to create NFTs.',
    icon: LightningBoltIcon,
  },
  {
    name: 'License and Own',
    description:
      'Easily license the rights to your NFTs and collect residuals. Also collect residuals on sales of the NFT.',
    icon: ScaleIcon,
  },
  {
    name: 'Competitive exchange rates',
    description:
      'Create NFTs at affordable rates.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Easy NFT Creation',
    description:
      'Drag and drop interface to create NFTs.',
    icon: LightningBoltIcon,
  },
  {
    name: 'License and Own',
    description:
      'Easily license the rights to your NFTs and collect residuals. Also collect residuals on sales of the NFT.',
    icon: ScaleIcon,
  }
]

export default function About() {
  return (
    <div className="py-12 bg-yellow-500" id="about_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row items-center">
          <h2 className="pr-16 text-3xl font-extrabold text-yellow-900">THE COLLECTION</h2>
          <button className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-gray-700">
            <span>Show More</span>
          </button>
        </div>
      </div>

      <div className="grid grid-flow-col grid-rows-2 gap-4">
        {features.map((feature) => (
          <div key={feature.name} className="h-10 px-5 text-indigo-100 transition-colors bg-gray-800 rounded-lg focus:shadow-outline hover:bg-gray-700">
            Test
          </div>
        ))}
      </div>


        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-yellow-900">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-yellow-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-yellow-900">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
