
function Container({children,className="",...rest}) {
  return (
    <div className={`container mx-auto lg:px-20 py-20 px-5 md:py-24  ${className}` } {...rest} > {children} </div>
  )
}
export default Container