import { useHistory } from "react-router-dom";

function Component (props) {
  
  const { image, title, id, body } = props;
  const history = useHistory();

  function handleClick () {
    history.push(`/post/${id}`);
  }

  return (
    <div class="w-full py-4 px-4 bg-white rounded-lg mb-6 border hover:shadow-md cursor-pointer" onClick={handleClick}>
      {image && (
        <div class="flex justify-center md:justify-end -mt-16">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt="" src={image} />
        </div>
      )}
      <div>
        <h2 class="text-gray-800 text-lg font-semibold">{title}</h2>
        <p class="mt-2 text-sm text-gray-600">{body}</p>
      </div>
    </div>
  )
}

export default Component;
