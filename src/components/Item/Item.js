const Item = ({name, img, description}) => {
  return(
  <div class="card text-center col-md-3 mt-3 mx-auto" >
  <img src={img} class="card-img-top" alt={name}/>
  <div class="card-body">
  <p class="card-text">{description}</p>
  </div>
  <button type="button" class="btn btn-primary">Ver Detalle</button>
</div>
  )
}

export default Item