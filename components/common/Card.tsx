import { CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
