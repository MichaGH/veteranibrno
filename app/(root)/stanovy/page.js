import SpolupraceContent from '@/components/SpolupraceContent';
import StanovyContent from '@/components/StanovyContent';
import PageHeader from '@/components/ui/PageHeader'
import React from 'react'

function page() {
   return (
    <>
      <PageHeader
        title="Stanovy a spolupráce"
        breadcrumbs={[{ label: "Stanovy a spolupráce", href: "/stanovy" }]}
      />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex gap-6 mb-10">
          <a href="#stanovy" className="text-[#7a0000] font-semibold hover:underline">
            Stanovy
          </a>
          <a href="#spoluprace" className="text-[#7a0000] font-semibold hover:underline">
            Spolupráce
          </a>
        </div>

        {/* Stanovy */}
        <StanovyContent />

        <hr className="my-16 border-gray-300" />

        {/* Spolupráce */}
        <SpolupraceContent />
      </section>
    </>
  );
}

export default page