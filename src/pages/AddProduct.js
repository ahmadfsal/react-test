import React from 'react'
import './styles/Form.css'
import { connect } from 'react-redux'
import { addProduct } from '../redux/actions'
import { moneyConverter } from '../shared/Formatter'
import { calcDiscount } from '../shared/CalculateDiscount'
import { withRouter } from 'react-router-dom'

class AddProduct extends React.Component {
  state = {
    name: '',
    desc: '',
    best_price: '',
    discount: '',
    final_price: 0,
  }

  render() {
    const { name, desc, best_price, discount, final_price } = this.state
    const { onAddProduct, history } = this.props
    return (
      <form
        id='form-add'
        className='form-container'
        onSubmit={e => {
          e.preventDefault()
          if (name === '') return alert('Name cannot be empty')
          else if (desc === '') return alert('Description cannot be empty')
          else if (best_price === '') return alert('Best Price cannot be empty')
          else if (discount === '') return alert('Discount cannot be empty')
          else {
            const data = {
              name: name,
              desc: desc,
              price: final_price
            }
            onAddProduct(data)
            history.push('/')
          }
        }}
      >
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <label htmlFor='name'>Description</label>
        <textarea
          id='desc'
          cols={40}
          rows={5}
          value={desc}
          onChange={e => this.setState({ desc: e.target.value })}
        />
        <label htmlFor='name'>Best Price (Rp)</label>
        <input
          id='best_price'
          type='text'
          value={best_price}
          onChange={e => this.setState({ best_price: e.target.value })}
        />
        <label htmlFor='name'>Discount (%)</label>
        <input
          id='discount'
          type='text'
          value={discount}
          onChange={e => {
            this.setState({
              discount: e.target.value,
              final_price: calcDiscount(best_price, e.target.value)
            })
          }}
        />
        <label htmlFor='name'>Final Price (Rp)</label>
        <input
          id='final_price'
          disabled
          type='text'
          value={moneyConverter(final_price)}
          onChange={e => this.setState({ final_price: e.target.value })}
        />
        <button type='submit'>Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddProduct: payload => dispatch(addProduct(payload))
})

export default withRouter(connect(null, mapDispatchToProps)(AddProduct))