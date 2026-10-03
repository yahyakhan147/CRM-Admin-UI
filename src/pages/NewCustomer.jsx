import Topbar from "../components/Topbar";
import NewCustomerForm from "../components/NewCustomerForm";
import { tasks } from "../data/mockData";
import Footer from "../components/Footer";

export default function NewCustomer({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Customers"
        subtitle="Monday, 07 Sep 2026"
        actionLabel="New Customer"
        onMenuClick={onMenuClick}
      />
      <NewCustomerForm />
      <Footer />
    </>
  );
}
