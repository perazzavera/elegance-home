export default function Formulario({ formData, setFormData }) {
  return (
    <div>
      <h3 className="font-dm text-lg">Contact & Shipping Information</h3>
      <div className="my-6">
        <h4 className="font-dm pb-4">Contact Information</h4>
        <form action="" className=" space-y-4">
          <div className="grid grid-cols-1">
            <label htmlFor="email">Email Address *</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="phone">Phone Number *</label>
            <input
              required
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
        </form>
      </div>
      <div className="my-6">
        <h4 className="font-dm pb-4">Shipping Address</h4>
        <form action="" className=" space-y-4">
          <div className="grid grid-cols-1">
            <label htmlFor="name">First Name *</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="lastName">Last Number *</label>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="street">Street Address *</label>
            <input
              required
              type="text"
              name="street"
              id="street"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="complement">
              Apartament, Suite, etc. (optional)
            </label>
            <input
              type="text"
              name="complement"
              id="complement"
              value={formData.complement}
              onChange={(e) =>
                setFormData({ ...formData, complement: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="state">State/Province *</label>
            <input
              required
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="zip">ZIP/ Postal Code *</label>
            <input
              required
              type="text"
              name="zip"
              id="zip"
              value={formData.zip}
              onChange={(e) =>
                setFormData({ ...formData, zip: e.target.value })
              }
              className="border-1 border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1">
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              required
              className="w-full px-3 py-2 border border-neutral-light rounded focus:outline-none focus:border-primary"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
