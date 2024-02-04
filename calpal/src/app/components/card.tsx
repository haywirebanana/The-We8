import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

  interface CardProps {
    title: string;
    image: string;
    path?: string;
}

  export default function Card({ title, image, path }: CardProps) {
    return (
        <MDBCard style={{ width: '18rem', textAlign: 'center', fontFamily: 'Montserrat' , fontWeight:'bolder', fontSize:'20px'}}>
            <img src={image} className="card-img-top" alt={title} />
            <MDBCardBody>
                <MDBCardTitle><a href={path} >{title}</a></MDBCardTitle>
                {/* <MDBBtn>Button</MDBBtn> */}
            </MDBCardBody>
        </MDBCard>
    );
}