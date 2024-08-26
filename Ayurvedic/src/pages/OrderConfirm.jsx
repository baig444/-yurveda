/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { Card, CardContent } from "../components/ui/card"
import { CheckCircle, Package, Truck, Calendar } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "../Context/ProductContext"


export default function OrderConfirm() {
    const {total} = useContext(CartContext)
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardContent className="p-6 md:p-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You for Your Order!</h1>
            <p className="text-gray-600">Your order has been received and is being processed.</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Order Number:</p>
                <p className="font-medium">#{Math.floor(Math.random() * 1000000)}</p>
              </div>
              <div>
                <p className="text-gray-600">Order Date:</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gray-600">Total Amount:</p>
                <p className="font-medium">₹{total}</p>
              </div>
              <div>
                <p className="text-gray-600">Payment Method:</p>
                <p className="font-medium">Cash on Delivery</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <Package className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">Preparing Your Order</h3>
                <p className="text-sm text-gray-600">We're getting your items ready for shipment.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Truck className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">Estimated Delivery</h3>
                <p className="text-sm text-gray-600">Your order should arrive within 3-5 business days.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">Track Your Order</h3>
                <p className="text-sm text-gray-600">You'll receive an email with tracking information once your order ships.</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              If you have any questions, please check our{" "}
              <Link href="/faq" className="text-blue-500 hover:underline">
                FAQ
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="text-blue-500 hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}