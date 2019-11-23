import React from 'react'
import './styles/ProductCard.css'
import { Link } from 'react-router-dom'
import { moneyConverter } from '../shared/Formatter'
import { connect } from 'react-redux'
import { deleteProduct } from '../redux/actions'

class ProductList extends React.Component {
  state = {
    limit: 5
  }

  componentDidMount() {
    window.addEventListener('scroll', this.loadMore)
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.loadMore)
  }

  loadMore = () => {
    setTimeout(() => {
      this.setState({ limit: this.state.limit + 5 })
    }, 1500)
  }

  render() {
    const { products, onDelete } = this.props
    const { limit } = this.state
    
    /**
     * sort products by new added
     * but conflict with scroll load more
     */
    // products.sort((a, b) => {
    //   if (a.id - b.id) return 1
    // })

    return (
      <div>
        {products.length === 0 && <p>No products available on list.</p>}
        {products.slice(0, limit).map(item => (
          <div key={item.id} className='card-container'>
            <img alt='thumb' src={item.thumb} className='product-image' />
            <div className='product-data'>
              <div className='row-data'>
                <h5>ID</h5>
                <h5>{item.id}</h5>
              </div>
              <div className='row-data'>
                <h5>Name</h5>
                <h5>{item.payload.name}</h5>
              </div>
              <div className='row-data'>
                <h5>Price</h5>
                <h5>Rp {moneyConverter(item.payload.price)}</h5>
              </div>
              <div className='row-data'>
                <h5>Description</h5>
                <h5>{item.payload.desc}</h5>
              </div>
            </div>
            <div className='product-action'>
              <button className='btn-edit'>
                <Link
                  to={{
                    pathname: `/edit/${item.id}`,
                    id: item.id,
                    state: {
                      name: item.payload.name,
                      desc: item.payload.desc,
                      price: item.payload.price
                    }
                  }}
                >
                  Edit
                </Link>
              </button>
              <button
                className='btn-delete'
                type='button'
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state
})

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
