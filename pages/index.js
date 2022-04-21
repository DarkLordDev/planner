import Head from "next/head";

const HomePage = () => {
	return (
		<div>
			<Head>
				<title>Planner | Home</title>
			</Head>

			<main>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
								These are your Work Boards
							</h1>
							<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
								These are your Work Boards. You can also create more and enjoy
								:)
							</p>
						</div>
						<div className="flex flex-wrap -m-4">
							<div className="xl:w-1/3 md:w-1/2 p-4">
								<div className="border border-gray-200 p-6 rounded-lg">
									<h2 className="text-lg text-gray-900 font-medium title-font mb-2">
										Title
									</h2>
									<div id="actions" className="space-x-3">
										<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
											Edit
										</button>
										<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
											Delete
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomePage;
