import React from 'react'
import './styles/Form.css'
import { connect } from 'react-redux'
import { updateProduct } from '../redux/actions'
import { moneyConverter } from '../shared/Formatter'
import { calcDiscount } from '../shared/CalculateDiscount'
import { withRouter } from 'react-router-dom'

class EditProduct extends React.Component {
  state = {
    name: '',
    desc: '',
    best_price: '',
    discount: '',
    final_price: ''
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { name, desc, price } = this.props.location.state
      this.setState({
        name: name,
        desc: desc,
        final_price: price
      })
    }
  }

  render() {
    const { id } = this.props.match.params
    const { name, desc, best_price, discount, final_price } = this.state
    const { onUpdate, history } = this.props
    return (
      <div>
        <form
          id='form-edit'
          className='form-container'
          onSubmit={e => {
            e.preventDefault()
            const data = {
              name: name,
              desc: desc,
              price: final_price
            }
            onUpdate(Number(id), data)
            history.push('/')
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
          <button type='submit'>Edit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onUpdate: (productID, product) => dispatch(updateProduct(productID, product))
})

export default withRouter(connect(null, mapDispatchToProps)(EditProduct))
