import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData();

  const token = localStorage.getItem("accessToken");

  const reviewInputRef = useRef();
  const formRef = useRef();
  const [reviews, setReviews] = useState(data.reviews);
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const rating = parseInt(form.rating.value);
    const comment = reviewInputRef.current.value;

    if (!rating) {
      window.add_post.close();
      toast.error("Rating is Required");
    } else if (!comment) {
      window.add_post.close();
      toast.error("Review is Required");
    }

    fetch(
      `https://seniority-solutions-backend-dtpieg2yh-farhanzizz.vercel.app/api/v1/review/${data.id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ rating, comment }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.add_post.close();
          fetchLatestReviews();
          toast.success(data.message);
        } else {
          window.add_post.close();
          toast.error(data.message);
        }
      });
  };

  const fetchLatestReviews = () => {
    // Fetch the latest reviews
    fetch(
      `https://seniority-solutions-backend-dtpieg2yh-farhanzizz.vercel.app/api/v1/service/${data.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data.reviews);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
      <div>
        <h1 className="text-primary text-3xl font-semibold mb-4">
          {data.name}
        </h1>
        <div className="flex gap-5 mb-5">
          <h1 className="text-primary text-xl">Price: ${data.price}</h1>
          <h1 className="text-primary text-xl lowercase">
            Location: {data.location}
          </h1>
          <h1 className="text-primary text-xl lowercase">
            Category: {data.category}
          </h1>
        </div>
        <p>{data.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl mb-3">Reviews</h1>
          {token && (
            <>
              <button
                onClick={() => window.add_post.showModal()}
                className="btn btn-primary btn-outline btn-sm"
              >
                Add Your review
              </button>
              <dialog
                id="add_post"
                className="modal modal-bottom sm:modal-middle"
              >
                <form ref={formRef} className="modal-box">
                  <h3 className="font-bold text-lg text-center">
                    Adding Review!
                  </h3>
                  <div className="flex flex-col justify-center items-center gap-5 my-6">
                    <select
                      required
                      name="rating"
                      className="select select-primary w-full bg-base-200 focus:outline-none"
                    >
                      <option disabled hidden value="">
                        Select How Many Stars
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <textarea
                      className="textarea textarea-primary w-full h-28 bg-base-200 focus:outline-none"
                      ref={reviewInputRef}
                      name="review"
                      placeholder="Your Review"
                    ></textarea>
                  </div>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      className="btn"
                      onClick={(event) => {
                        event.preventDefault();
                        window.add_post.close();
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="btn btn-primary "
                      type="submit"
                      onClick={handleReviewSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </dialog>
            </>
          )}
        </div>
        {reviews.length ? (
          reviews.map((review) => (
            <div className="bg-base-200 p-5 rounded-lg">
              <h1 className="text-primary mb-2">
                Rating: {review.rating} stars
              </h1>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <div className="bg-base-200 p-5 rounded-lg">
            <h1 className="text-lg text-center">No Reviews Yet!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
