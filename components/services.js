import SocialLink from './sociallLink'

export default function services() {
	return (
		<section className="bg-purple-darkest text-gray-600 body-font border-solid border-4">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
					<h1 className="text-2xl text-lg title-font mb-4 text-gray-50">Services We Offer</h1>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="p-4 lg:w-1/3 md:w-1/3">
							<div className="h-full flex flex-col items-center text-center">
							<img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
							<div className="w-full">
								<h2 className="title-font font-medium text-lg text-gray-50">Landing Pages</h2>
							</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/3 md:w-1/3">
							<div className="h-full flex flex-col items-center text-center">
							<img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
							<div className="w-full">
								<h2 className="title-font font-medium text-lg text-gray-50">Generate Art</h2>
							</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/3 md:w-1/3">
							<div className="h-full flex flex-col items-center text-center">
							<img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
							<div className="w-full">
								<h2 className="title-font font-medium text-lg text-gray-50">Generate NFTs</h2>
							</div>
							</div>
						</div>
					</div>
				</div>
		</section>
	)
}