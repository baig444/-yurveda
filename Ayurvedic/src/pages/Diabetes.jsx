/* eslint-disable no-irregular-whitespace */
import { diabetes, medicine } from "../constants";

/* eslint-disable react/no-unescaped-entities */
const Diabetes = () => {
  return (
    <div className="w-full p-10">
      <div className="mt-10 px-4">
        <h1 className="text-5xl mb-5 font-bold">Diabetes</h1>
        <h1>
          For 100 years, our innovations have helped define the standard of care
          for people living with diabetes. We are not done.
        </h1>
      </div>
      <div className="flex flex-wrap  min-h-[90vh] w-full items-center justify-center gap-16">
        <div className="w-96">
          <h1 className="text-2xl">
            "Looking to the future, we want to help bring diabetes under control
            with our medicines, education programs, services, apps, and
            connected devices. My pledge to the diabetes community is: we won’t
            settle for less."
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.sanofi.com/optim/dotcom/content-app/biographies/bio-olivier-charmeil_20240329142126.jpg?size=small"
            alt=""
            className="w-60 h-60 rounded-full object-cover"
          />
          <h1 className="text-xl">Olivier Chameil</h1>
          <h3 className="w-72 text-center">
            Executive Vice President and Global Head of General Medicines
          </h3>
        </div>
      </div>
      <div className="min-h-[60vh] w-full p-6">
        <h1 className="text-5xl font-semibold">Did You Know?</h1>
        <div className="mt-8 flex flex-wrap gap-4">
          {diabetes.map((item) => (
            <div
              key={item.id}
              className="max-w-fit h-fit border border-gray-300 rounded-lg p-4"
            >
              <h1 className="lg:text-6xl font-extrabold">{item.name}</h1>
              <h1 className="border-b border-gray-400 mt-4"></h1>
              <h3 className="mt-4 w-80">{item.description}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-20 flex flex-wrap gap-10 px-10">
        {medicine.map((item) => (
          <div key={item.id} className="h-[60vh]">
            <img
              src={item}
              alt=""
              className="w-60 h-full object-cover rounded-lg hover:scale-105 transition-all"
            />
          </div>
        ))}
      </div>
      <div className="w-full min-h-screen mt-20 flex flex-col gap-40">
        <div className="lg:flex items-center justify-around">
          <div className="h-fit lg:w-[45%]">
            <img
              src="https://www.sanofi.com/optim/dotcom/pages/images/your-health/medicines/diabetes/what-is-diabetes_20230502155825.jpg?size=large"
              alt="image"
              className="rounded-lg"
            />
          </div>
          <div className="h-[50vh] lg:w-[40%] px-5">
            <h1 className="text-5xl lg:mb-4">What Is Diabetes?</h1>
            <p>
              Diabetes is a chronic condition affecting the body’s ability to
              effectively process and convert sugar into energy.
            </p>
            <p className="mt-4">
              People with type 1 diabetes do not produce insulin, a hormone made
              by the pancreas. People with type 2 diabetes do not respond to
              insulin as well as they should, or do not make enough of it.2 This
              leads to raised glucose levels in the blood which in the long-term
              may lead to complications in various organs.3
            </p>
          </div>
        </div>
        <div className="lg:flex items-center justify-around">
          <div className="h-fit lg:w-[40%] px-5">
            <h1 className="text-5xl mb-4">
              Supporting Access to Diabetes Education
            </h1>
            <p>
              Our aim is to transform the way diabetes is controlled and
              treated, not just with medicines, but with a holistic approach.
            </p>
            <p className="mt-4">
              We believe diabetes education is critical for individuals living
              with the condition and for the healthcare professionals who care
              for them.
            </p>
          </div>
          <div className="h-[50vh] lg:w-[45%] px-5">
            <img
              src="https://www.sanofi.com/optim/dotcom/pages/images/your-health/medicines/diabetes/supporting-access-to-diabetes-education_20230502155825.jpg?size=large"
              alt="image"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="lg:flex items-center justify-around">
          <div className="h-fit lg:w-[45%] px-5">
            <img
              src="https://www.sanofi.com/optim/dotcom/pages/images/your-health/medicines/diabetes/blood-sugar-levels_20230502155824.jpg?size=large"
              alt="image"
              className="rounded-lg"
            />
          </div>
          <div className="h-[50vh] lg:w-[40%] px-5">
            <h1 className="text-5xl mb-4">
              Blood Sugar Levels and ‘Time in Range’
            </h1>
            <p>
              Many people living with diabetes experience phases when blood
              sugar levels are too high, then too low. This variability can be
              challenging to manage.4
            </p>
            <p className="mt-4">
              ‘Time in Range’ (TiR) is the time a person spends with blood sugar
              levels in their target range, improving the understanding of this
              key metric is a mission for us at Sanofi.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center justify-around">
          <div className="h-fit lg:w-[40%] px-5">
            <h1 className="text-5xl mb-4">The Future of Diabetes Care</h1>
            <p>
              How can we go beyond medicines to help change the way clinicians
              and people living with diabetes make decisions about their
              diabetes?
            </p>
            <p className="mt-4">
              And how can we help shape the future of this chronic disease and
              positively impact health outcomes?
            </p>
            <p className="mt-4">
              Digitally powered personalized healthcare will help us
              revolutionize and improve access to treatments and meet these
              challenges.
            </p>
          </div>
          <div className="h-fit lg:w-[45%] px-5">
            <img
              src="https://www.sanofi.com/optim/dotcom/pages/images/your-health/medicines/diabetes/future-of-diabetes-care_20230502155824.jpg?size=large"
              alt="image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="lg:p-16">
        <h1 className="text-5xl mt-4">Refrence</h1>
        <ul className="list-decimal space-y-2 mt-10 px-4">
          <li>
            <h1>
              International Diabetes Federation (2022). About Diabetes: Diabetes
              facts & figures. Accessed December 2022.
            </h1>
          </li>
          <li>
            <h1>
              Healthline (2022). Type 1 and Type 2 Diabetes: What’s the
              Difference? Accessed December 2022
            </h1>
          </li>
          <li>
            <h1>
              International Diabetes Federation (2022). About Diabetes. Accessed
              December 2022
            </h1>
          </li>
          <li>
            <h1>
              Sun B., et al. (2021) Comprehensive elaboration of glycemic
              variability in diabetic macrovascular and microvascular
              complications. Cardiovascular Diabetology 20:9; doi:
              10.1186/s12933-020-01200-7
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Diabetes;
