const handler = async (req, res) => {
	try {
		// Your API route logic here
		// ...

		// Example: Send a response
		res.status(200).json({ message: 'API route is working!' });
	} catch (error) {
		console.error('Error handling API request:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

export default handler;
