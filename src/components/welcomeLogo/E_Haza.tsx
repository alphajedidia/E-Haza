import "../../index.css"
type EHaza = {
    title : string;
    illustration : string;
    description : string;
}

function E_Haza({title , illustration , description} : EHaza) {
  return (
    <div
      className="hidden rounded-b-lg lg:flex lg:w-6/12 lg:items-center lg:rounded-r-lg lg:rounded-bl-none "
      style={{
        background:'linear-gradient(180deg, #2178c0, #1b52c0, #1b388d, #000329)'
      }}
    >
      <div className="px-4 py-6 text-white md:mx-5 md:p-10">
        <h4 className="mb-6 text-5xl font-semibold text-center">{title}</h4>
        <img src={illustration} alt={title} />
        <p className="text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
export default E_Haza;
