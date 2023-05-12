import React from 'react';
import { Link } from 'react-router-dom';
import HomepageCarousel from './HomepageCarousel';
import PriorityTopics from './PriorityTopics';
import BeforeTheBaby from './BeforeTheBaby';

const Header = () => {
	return (
		<>
    <h2>The Parenting Protocol</h2>
    <ul>
      <li><a href=''>About</a></li>
      <li><a href='#'>User Settings</a></li>
      <button>Dark/Light Mode</button>
    </ul>
    <br></br>
    <ul>
      <li><a href='#'>Must Haves</a></li>
      <li><a href='#'>Meal Plans</a></li>
      <li><a href='#'>Staying Active</a></li>
      <li><a href='#'>Deals</a></li>
    </ul>
    </>
	)
};

const Homepage = () => {
	return (
		<div>
				<Header/>
        <HomepageCarousel />
        <PriorityTopics />
        <BeforeTheBaby />
		</div>
	)
};

const Aboutpage = () => {
	return (
		<div>
				<Header/>
				<h1>Aboutpage</h1>
				<Link to='/'>Go to Aboutpage</Link>
		</div>
	)
};
export {Homepage, Aboutpage } ;