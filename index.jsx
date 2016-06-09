const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const hashHistory = router.hashHistory;

var EMAILS = [
	{
		id: 0,
		from: "billg@microsoft.com",
		to: "TeamWoz@Woz.org",
		title: "Possible work opportunity",
		content: "Dear Woz.  Fancy a job at Mister Softee? Bill x",
		mailbox: 'inbox'
	},
	{
		id: 1,
		from: "zuck@facebook.com",
		to: "TeamWoz@Woz.org",
		title: "Do you know PHP?",
		content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x",
		mailbox: 'inbox'
	},
	{
		id: 2,
		from: "ChEaPFlighTZ@hotmail.com",
		to: "TeamWoz@Woz.org",
		title: "WaNT CHEEp FlitZ",
		content: " Theyre CheEp",
		mailbox: 'spam'
	},
	{
		id: 3,
		from: "NiKEAIRJordanZ@hotmail.com",
		to: "TeamWoz@Woz.org",
		title: "JorDanz For SAle",
		content: "Theyre REELY CheEp",
		mailbox: 'spam'
	}
];

var Email = function(props) {
	return (
		<div>
			{props.from}
			<br />
			{props.to}
			<br />
			{props.title}
			<br />
		</div>
	);
};

var EmailList = React.createClass({
	render: function() {
		var route = this.props.route.path;
		var title = route.replace(/\b\w*/g, function(text) {
				return (text.charAt(0).toUpperCase() + text.substr(1).toLowerCase());
			}
		);
		var emails = EMAILS.filter(email => (email.mailbox === route)).map(function(email, index) {
			return (
				<li key={index}>
					<Email id={email.id} from={email.from} to={email.to} title={email.title} content={email.content} />
	 			</li>
			)
		});
		return (
			<div>
				<h1>{title}</h1>
				<ul>
					{emails}
				</ul>
			</div>
		)
	}
});

var EmailContainer = function(props) {
	return (
		<div>
			<aside>
				<ul>
					<li>Inbox</li>
					<li>Spam</li>
				</ul>
			</aside>
		
			<main>
				{props.children}
			</main>
		</div>
	);
};

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={EmailContainer}>
			<Route path="inbox" component={EmailList} />
			<Route path="spam" component={EmailList} />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(routes, document.getElementById('app'));
	// ReactDOM.render(<Menu />, document.getElementById('menu'));
});