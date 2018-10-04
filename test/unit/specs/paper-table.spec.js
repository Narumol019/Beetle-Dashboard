import Vue from 'vue'
import PaperTable from 'src/components/UIComponents/PaperTable.vue'

const tableData = [{
  beetle_no: 1,
  place: 'Patong',
  date: '2017-07-04',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 2,
  place: 'Patong',
  date: '2017-07-04',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 3,
  place: 'Patong',
  date: '2017-07-04',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 4,
  place: 'Patong',
  date: '2017-07-04',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 5,
  place: 'Patong',
  date: '2017-07-04',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 1,
  place: 'Rawai',
  date: '2017-08-06',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 2,
  place: 'Rawai',
  date: '2017-08-06',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 3,
  place: 'Rawai',
  date: '2017-08-06',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 4,
  place: 'Rawai',
  date: '2017-08-06',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 5,
  place: 'Rawai',
  date: '2017-08-06',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 1,
  place: 'Kata',
  date: '2018-09-11',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 2,
  place: 'Kata',
  date: '2018-09-11',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 3,
  place: 'Kata',
  date: '2018-09-11',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 4,
  place: 'Kata',
  date: '2018-09-11',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 5,
  place: 'Kata',
  date: '2018-09-11',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 1,
  place: 'Nai-yang',
  date: '2018-09-03',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 2,
  place: 'Nai-yang',
  date: '2018-09-03',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 3,
  place: 'Nai-yang',
  date: '2018-09-03',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 4,
  place: 'Nai-yang',
  date: '2018-09-03',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
},
{
  beetle_no: 5,
  place: 'Nai-yang',
  date: '2018-09-03',
  open: '14:30:05',
  colse: '14:32:55',
  rent: 2.50,
  total: 20
}
]

describe('paper table', () => {
  it('should render only specified columns', () => {
    const columns = ['beetle_no', 'place']
    const vm = mount(PaperTable,{data:tableData,columns:columns})
    let headerRows = vm.$el.querySelectorAll('th')
    expect(headerRows.length).to.equal(columns.length)
    expect(headerRows[0].innerHTML).to.equal(columns[0])
    expect(headerRows[1].innerHTML).to.equal(columns[1])
  })

  it('should render specified data', () => {
    const columns = ['beetle_no', 'place']
    const vm = mount(PaperTable,{data:tableData,columns:columns})
    let tableRows = vm.$el.querySelectorAll('tr')
    expect(tableRows.length).to.equal(tableData.length)
    expect(tableRows[0].innerHTML).to.equal(`<td>${tableData[0].id}</td><td>${tableData[0].name}</td>`)
  })
})
