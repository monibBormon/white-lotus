import BookingForm from "../components/Home/BookingForm";
import Layout from "../components/shared/layout";

function BookNowPage() {
    return ( <Layout>
        <div className="py-8">
            <BookingForm/>
        </div>
    </Layout> );
}

export default BookNowPage;