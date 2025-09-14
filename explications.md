## Mon process
J'ai essayé d'implementer un maximum de test pour faire echo au premier test tech (honnetement, bien plus que lorsque je dev "classiquement")

Le parsing des domains a été extrait du composant et est reutilisable grace Redux. Pour la reutilisation, j'ai pensé a un hook ou a redux, mais comme il y avait deja du redux, je suis parti sur ca.
Le selecteur de domains etant mandatory, j'en ai ajouté un autre a coté (qui derive de lui)

Comme j'ai vu qu'il y avait des bugs reportés etc, j'ai fait attention aux deduplications

## utilisation

il suffit d'utiliser useSelector pour recuperer les listes

```typescript

const Test = () => {
  const { countries, classifications, subClassifications } = useSelector(getDomainsInfos);
  
  return <>toto</>
};
```
