import express from 'express';
import './lib/env';

// This is the point of entry
const app: express.Express = express();

app.listen(process.env.PORT || 8000, () => {
	console.log(`App running on port ${process.env.PORT}`);
});
