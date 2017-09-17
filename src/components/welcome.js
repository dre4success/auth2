import React from 'react';

export default () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1>
					<i class="fa fa-camera-retro" /> The Image Gallery
				</h1>
				<p>Beautiful Pictures</p>
			</div>

			<div className="row">
				<div className="col-lg-4 col-sm-6">
					<div className="thumbnail">
						<img src="http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg"/>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					<div className="thumbnail">
						<img src="http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg"/>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					<div className="thumbnail">
						<img src="http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg"/>
					</div>
				</div>
			</div>
		</div>
	);
};
