import CTA from './../../components/shared/CTA';

import servicesData from './../../json/services.json'

export default function ServicesPage() {
  return (
    <>
      <CTA data={servicesData.cta} />
    </>
  );
}