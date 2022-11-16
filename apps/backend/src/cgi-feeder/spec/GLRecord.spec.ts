import { GLRecord } from '../';
import { SalesDTO } from '../../sales/dto/sales.dto';

const salesRecord = require('./fixtures/sale.json');
describe('GLRecord', () => {
  it('transform from sales event ', () => {
    const glRecord = GLRecord.transformSalesEvent([salesRecord as SalesDTO]);
    expect(glRecord.batchHeader).toHaveProperty('transactionType', 'BH');
  });
});

