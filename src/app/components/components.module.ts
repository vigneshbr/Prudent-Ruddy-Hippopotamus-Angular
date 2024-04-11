import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GalleryCard3 } from './gallery-card3/gallery-card3.component'
import { WarningMessageModal } from './warning-message-modal/warning-message-modal.component'
import { QuotationInputCard1 } from './quotation-input-card1/quotation-input-card1.component'
import { SuccessMessageCard } from './success-message-card/success-message-card.component'
import { QuotationInputCard4 } from './quotation-input-card4/quotation-input-card4.component'
import { LoginModal } from './login-modal/login-modal.component'
import { FeatureCard4 } from './feature-card4/feature-card4.component'
import { ErrorMessageModal } from './error-message-modal/error-message-modal.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { QuotationInputCard6 } from './quotation-input-card6/quotation-input-card6.component'
import { GalleryCard2 } from './gallery-card2/gallery-card2.component'
import { QuotationInputCard3 } from './quotation-input-card3/quotation-input-card3.component'
import { ErrorMessageCard } from './error-message-card/error-message-card.component'
import { QuotationInputCard2 } from './quotation-input-card2/quotation-input-card2.component'
import { SuccessMessageModal } from './success-message-modal/success-message-modal.component'
import { LoginInputCard } from './login-input-card/login-input-card.component'
import { QuotationInputCard5 } from './quotation-input-card5/quotation-input-card5.component'
import { QuotationListing } from './quotation-listing/quotation-listing.component'
import { QuotationForm } from './quotation-form/quotation-form.component'
import { FeatureCard41 } from './feature-card41/feature-card41.component'
import { SignupModal } from './signup-modal/signup-modal.component'
import { LoadingOverlay } from './loading-overlay/loading-overlay.component'

@NgModule({
  declarations: [
    GalleryCard3,
    WarningMessageModal,
    QuotationInputCard1,
    SuccessMessageCard,
    QuotationInputCard4,
    LoginModal,
    FeatureCard4,
    ErrorMessageModal,
    NavigationLinks,
    QuotationInputCard6,
    GalleryCard2,
    QuotationInputCard3,
    ErrorMessageCard,
    QuotationInputCard2,
    SuccessMessageModal,
    LoginInputCard,
    QuotationInputCard5,
    QuotationListing,
    QuotationForm,
    FeatureCard41,
    SignupModal,
    LoadingOverlay,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    GalleryCard3,
    WarningMessageModal,
    QuotationInputCard1,
    SuccessMessageCard,
    QuotationInputCard4,
    LoginModal,
    FeatureCard4,
    ErrorMessageModal,
    NavigationLinks,
    QuotationInputCard6,
    GalleryCard2,
    QuotationInputCard3,
    ErrorMessageCard,
    QuotationInputCard2,
    SuccessMessageModal,
    LoginInputCard,
    QuotationInputCard5,
    QuotationListing,
    QuotationForm,
    FeatureCard41,
    SignupModal,
    LoadingOverlay,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
