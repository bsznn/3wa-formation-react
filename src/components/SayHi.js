export default function SayHi(props) {
  // Propriétés donnée provenant du parent
  // ke composant qui utilise SayHi
  console.log(props);
  props.yearLessRetirement(64 - props.age);
  return (
    <h1>
      Welcome {props.name} {props.age} years old, your job is {props.job}
    </h1>
  );
}
