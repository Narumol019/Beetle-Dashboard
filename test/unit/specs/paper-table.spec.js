import Vue from 'vue'
import PaperTable from 'src/components/UIComponents/PaperTable.vue'

const tableData = [{
  name: 'beetle 1',
  place: 'Patong',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 2',
  place: 'Patong',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 3',
  place: 'Patong',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: ' ',
  place: 'Patong',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 5',
  place: 'Patong',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 1',
  place: 'Rawai',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 2',
  place: 'Rawai',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 3',
  place: 'Rawai',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 4',
  place: 'Rawai',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 5',
  place: 'Rawai',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 1',
  place: 'Kata',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 2',
  place: 'Kata',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 3',
  place: 'Kata',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 4',
  place: 'Kata',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 5',
  place: 'Kata',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 1',
  place: 'Nai-yang',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 2',
  place: 'Nai-yang',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 3',
  place: 'Nai-yang',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 4',
  place: 'Nai-yang',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
},
{
  name: 'beetle 5',
  place: 'Nai-yang',
  open: '14:30:05',
  close: '14:32:55',
  price: 20
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
