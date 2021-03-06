import { createServer, Model } from 'miragejs';

export function makerServer() {
  createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Build site web',
            value: 120.0,
            category: 'Informatique',
            date: new Date().toString(),
            type: 'credit',
          },

          {
            id: 2,
            title: 'Software videoMaker',
            value: 130.0,
            category: 'Informatique',
            date: new Date().toString(),
            type: 'debit',
          },
          {
            id: 4,
            title: 'Software Office',
            value: 100.0,
            category: 'Informatique',
            date: new Date().toString(),
            type: 'debit',
          },
          {
            id: 3,
            title: 'Bought iphone XR',
            value: 1100.0,
            category: 'Technologie',
            date: new Date().toString(),
            type: 'credit',
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';
      this.get('/transaction', () => {
        return this.schema.all('transaction');
      });

      this.post('/transaction', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return this.schema.create('transaction', data);
      });
    },
  });
}
