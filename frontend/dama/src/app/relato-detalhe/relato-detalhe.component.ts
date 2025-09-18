import { Component, type OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { RelatosService, Relato } from "../services/relatos.service"
import { DomSanitizer, SafeHtml } from "@angular/platform-browser"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "../components/header/header.component"

@Component({
  selector: "app-relato-detalhe",
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: "./relato-detalhe.component.html",
  styleUrls: ["./relato-detalhe.component.css"],
  styles: [],
})
export class RelatoDetalheComponent implements OnInit {
  relato: Relato | null = null

  constructor(
    private route: ActivatedRoute,
    private relatosService: RelatosService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    if (id) {
      this.relatosService.getRelato(id).subscribe(
        (relato) => {
          this.relato = relato
        },
        (error) => {
          console.error("Erro ao carregar o relato:", error)
        },
      )
    }
  }

  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }
}

