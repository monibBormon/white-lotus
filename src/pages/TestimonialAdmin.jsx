import { Loader2, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Layout from "../components/shared/layout";

function TestimonialAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/testimonials`);
      if (!response.ok) throw new Error("Failed to fetch testimonials");
      const data = await response.json();
      setTestimonials(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [API_URL]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    setDeletingId(id);
    try {
      const response = await fetch(`${API_URL}/api/testimonials/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete testimonial");
      // Re-fetch testimonials after successful deletion
      await fetchTestimonials();
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen mt-20 bg-linear-to-br from-primary/5 via-white to-stone-50">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">
                  Testimonials Admin
                </h2>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                  Manage testimonials submitted by users
                </p>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <Loader2 className="animate-spin mx-auto" size={48} />
                  <p className="mt-4 text-stone-600">Loading testimonials...</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-red-600">Error: {error}</p>
                </div>
              ) : testimonials.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-stone-600">No testimonials found.</p>
                </div>
              ) : (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                  {/* Desktop Table */}
                  <div className="hidden md:block">
                    <table className="w-full">
                      <thead className="bg-stone-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                            Name
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                            Profession
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                            Review
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-stone-900">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        {testimonials.map((testimonial) => (
                          <tr
                            key={testimonial._id}
                            className="hover:bg-stone-50"
                          >
                            <td className="px-6 py-4 text-sm text-stone-900">
                              {testimonial.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-stone-600">
                              {testimonial.profession}
                            </td>
                            <td className="px-6 py-4 text-sm text-stone-700 max-w-xs truncate">
                              {testimonial.review}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <button
                                onClick={() => handleDelete(testimonial._id)}
                                disabled={deletingId === testimonial._id}
                                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                              >
                                {deletingId === testimonial._id ? (
                                  <Loader2 className="animate-spin" size={16} />
                                ) : (
                                  <Trash2 size={16} />
                                )}
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden">
                    <div className="divide-y divide-stone-200">
                      {testimonials.map((testimonial) => (
                        <div key={testimonial._id} className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-stone-900">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-stone-600">
                                {testimonial.profession}
                              </p>
                            </div>
                            <button
                              onClick={() => handleDelete(testimonial._id)}
                              disabled={deletingId === testimonial._id}
                              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                            >
                              {deletingId === testimonial.id ? (
                                <Loader2 className="animate-spin" size={16} />
                              ) : (
                                <Trash2 size={16} />
                              )}
                              Delete
                            </button>
                          </div>
                          <p className="text-stone-700 leading-relaxed">
                            {testimonial.review}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TestimonialAdmin;
