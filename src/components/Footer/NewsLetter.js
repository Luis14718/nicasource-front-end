import Typography from '@mui/material/Typography';





export default function NewsLetter() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <Typography variant="h4" component="div" gutterBottom>
                        New Episode Every Week!
                    </Typography>
                    <Typography className="w-50 mx-auto" variant="p" component="div" gutterBottom>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.
                    </Typography>
                </div>
            </div>
            <div className="row new_letter">
                <div className="col-sm-12 text-center mx-auto">
                    <div className="mt-3 mb-5">
                        <form className="form  d-flex">
                            <input type="text" className="form-control" placeholder="Type Your Email">
                            </input>
                            <button type="submit" className="btn primary-btn"> Subscribe </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}