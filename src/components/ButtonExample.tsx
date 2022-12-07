interface ButtonProps{
  text: string
  color: string
}

export default function ButtonExample(props: ButtonProps) {

return (
    <button
      className={`${props.color} w-44 rounded-lg mt-8 hover:bg-slate-300 p-1`}
      type="submit"
    >
      {props.text}
    </button>
  )
}
