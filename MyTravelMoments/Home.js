import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
	return (
		<section className="container">
			<div className="container-1">
				<div className="image-div-1">
	          		<img src="./images/cozumel.jpg" alt="" />
	        	</div>
	        	<h3>Cozumel, the most beautiful island in the Caribbean</h3>
	        	<br />
	        	<p>The name Cozumel was derived from the Mayan "Cuzamil" or "Ah Cuzamil Peten" in full, 
				which means "the island of swallows" (Spanish: Isla de las Golondrinas).
				<br />
				<br />
	        	Large parts of the island are covered with mangrove forest which has many endemic animal species. 
				Cozumel is a flat island based on limestone, resulting in a karst topography. The highest natural 
				point on the island is less than 15 m (49 ft) above sea level. The cenotes are deep water-filled 
				sinkholes formed by water percolating through the soft limestone soil for thousands of years. 
				Cozumel's cenotes are restricted to qualified cave divers with appropriate credentials.
				<br />
				<br />
	        	Cozumel is surrounded by a diverse ecosystem of coral reefs that is home to more than 1,000 marine species. 
				The reefs are primarily found on underwater cliffs, there are also some in coastal lagoons and on sand bars
				at the north tip of the island. They are part of the much larger Mesoamerican Barrier Reef System which is
				the second largest reef in the world, stretching over 1,000 kilometers (620 mi).</p>
		        <div className="container-x">
		        	<div className="image-div-x">
	          			<img src="./images/beaches2.jpg" alt="" />
	        		</div>
	        		<div className="paragraph-div">
	        			<h3>Winter in Seattle</h3>
	        			<br />
						<p>Seattle is located between the saltwater Puget Sound (an arm of the Pacific Ocean) to the west 
						and Lake Washington to the east. The city's chief harbor, Elliott Bay, is part of Puget Sound, 
						which makes the city an oceanic port. To the west, beyond Puget Sound, are the Kitsap Peninsula 
						and Olympic Mountains on the Olympic Peninsula; to the east, beyond Lake Washington and the 
						Eastside suburbs, are Lake Sammamish and the Cascade Range.</p>
	        		</div>
		        </div>
		        <div className="container-x">
		        	<div className="image-div-x">
	          			<img src="./images/beaches3.jpg" alt="" />
	        		</div>
	        		<div className="paragraph-div">
	        			<h3>Playa del Carmen</h3>
	        			<br />
						<p>Playa del Carmen is a city located along the Caribbean Sea in the municipality of Solidaridad, 
						in the state of Quintana Roo, Mexico. It is a popular tourist area in eastern Mexico. Playa del 
						Carmen features a wide array of tourist activities due to its geographical location in the Riviera 
						Maya. The town has one of the fastest-growing populations in Mexico.</p>
	        		</div>
		        </div>
		        <div className="container-x">
		        	<div className="image-div-x">
	          			<img src="./images/nature1.jpg" alt="" />
	        		</div>
	        		<div className="paragraph-div">
	        			<h3>Yellowstone National Park</h3>
	        			<br />
						<p>Yellowstone National Park is an American national park located in the western United States, 
						largely in the northwest corner of Wyoming and extending into Montana and Idaho. It was 
						established by the U.S. Congress and signed into law by President Ulysses S. Grant on March 1, 1872. 
						Yellowstone was the first national park in the U.S. and is also widely held to be the first national 
						park in the world. The park is known for its wildlife and its many geothermal features, especially 
						Old Faithful geyser, one of its most popular.</p>
	        		</div>
		        </div>
	 		</div>
	 		<div className="container-2">
	 			<h2><Link className="nav-link" to="/aboutme">About Me</Link></h2>
	 			<br />
	 			<div className="image-div-2">
	        		<img src="./images/aboutme.jpg" alt="" />
	        	</div>
	        	<br />
	        	<p>Go explore, experience and capture your moments</p>
	        	<br />
	        	<h2><Link className="nav-link" to="/favoritemoments">Favorite Moments</Link></h2>
	 			<br />
	 			<div className="image-div-2">
	        		<img src="./images/hiking1.jpg" alt="" />
	        	</div>
	        	<br />
	        	<p>Climbing Mt Rainier</p>
	        	<br />
	 			<div className="image-div-2">
	        		<img src="./images/ironman.jpg" alt="" />
	        	</div>
	        	<br />
	        	<p>Completing my first Ironman 70.3 race</p>
	        	<br />
	        </div>
		</section>
	)
}
export default Home