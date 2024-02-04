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
}

  export default function Card({ title, image }: CardProps) {
    return (
        <MDBCard style={{ width: '18rem', textAlign: 'center', fontFamily: 'Montserrat' , fontWeight:'bolder', fontSize:'20px'}}>
            <img src={image} className="card-img-top" alt={title} />
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                {/* <MDBBtn>Button</MDBBtn> */}
            </MDBCardBody>
        </MDBCard>
    );
}