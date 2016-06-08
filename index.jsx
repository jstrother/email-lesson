const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const hashHistory = router.hashHistory;

var EMAILS = {
	inbox: {
		0: {
			id: 0,
			from: "billg@microsoft.com",
			to: "TeamWoz@Woz.org",
			title: "Possible work opportunity",
			content: "Dear Woz.  Fancy a job at Mister Softee? Bill x"
		},
		1: {
			id: 1,
			from: "zuck@facebook.com",
			to: "TeamWoz@Woz.org",
			title: "Do you know PHP?",
			content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
		}
	},
	spam: {
		0: {
			id: 0,
			from: "ChEaPFlighTZ@hotmail.com",
			to: "TeamWoz@Woz.org",
			title: "WaNT CHEEp FlitZ",
			content: " Theyre CheEp"
		},
		1: {
			id: 1,
			from: "NiKEAIRJordanZ@hotmail.com",
			to: "TeamWoz@Woz.org",
			title: "JorDanz For SAle",
			content: "Theyre REELY CheEp"
		}
	}
};

var Email = function(props) {
	return (
		<div>
			{props.from}
			<br />
			{props.to}
			<br />
			{props.title}
			<br />
			{props.content}
			<br />
		</div>
	);
};

var Inbox = function(props) {
	var emails = Object.keys(props.emails.inbox).map(function(emailID, index) {
		var email = props.emails.inbox[emailID];
		return (
			<li key={index}>
				<Email id={email.id} from={email.from} to={email.to} title={email.title} content={email.content} />
			</li>
		);
	});

	return (
		<div>
			<h1>Inbox</h1>
			<ul>
				{emails}
			</ul>
		</div>
	);
};

var Spam = function(props) {
	var emails = Object.keys(props.emails.spam).map(function(emailID, index) {
		var email = props.emails.spam[emailID];
		return (
			<li key={index}>
				<Email id={email.id} from={email.from} to={email.to} title={email.title} content={email.content} />
			</li>
		);
	});

	return (
		<div>
			<h1>Spam</h1>
			<ul>
				{emails}
			</ul>
		</div>
	);
};

var InboxContainer = function() {
	return (
		<div>
			<Inbox emails={EMAILS} />
		</div>
	);
};

var SpamContainer = function() {
	return (
		<div>
			<Spam emails={EMAILS} />
		</div>
	);
};

var EmailContainer = function() {
	return (
		<div>
			
		</div>
	);
};

var routes = (
	<Router history={hashHistory}>
		<Route path="/email" component={EmailContainer} />
		<Route path="/inbox" component={InboxContainer} />
		<Route path="/spam" component={SpamContainer} />
	</Router>
);

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(routes, document.getElementById('app'));
	// ReactDOM.render(<Menu />, document.getElementById('menu'));
});