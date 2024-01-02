const handler = async (res) => {
	try {
		res.status(200).json({ message: 'API route is working!' });
	} catch (error) {
		console.error('Errorsadasdsa:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

export default handler;
