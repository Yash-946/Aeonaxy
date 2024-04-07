const EmailComp = () => {
  return (
    <div className="flex flex-col items-center mt-20 mb-20">
      <div className="text-4xl font-bold">
        Please verify your email...
      </div>
      <div className="mt-6">
        <img className="w-26 h-20" src="/Emailverify.jpg" alt="" />
      </div>
      <div className="mt-5 text-gray-500 font-semibold">
        Please verify your email address. We've sent a confirmation email to:
      </div>
      <div className="mt-5 font-extrabold text-lg">
        abc123@xyz.com
      </div>
      <div className="mt-5 text-gray-500 font-semibold">
        Click the confirmation link email to begin using Dribble.
      </div>
      <div className=" w-2/3 mt-5 text-gray-500 font-semibold text-center">
        Didn't recieve the email? Check your  spam folder, it may have been caught by a filter. It you still don't see it, you can <a className="text-[#ea4b8a] font-bold" href="#">resend the confirmation email.</a>
      </div>
      <div className="mt-5 text-gray-500 font-semibold">
        Wrong email address? <a className="text-[#ea4b8a] font-bold" href="#">Change it</a>
      </div>
    </div>
  );
}

export default EmailComp;